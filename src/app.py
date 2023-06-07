from flask import Flask, request, jsonify
import json
from flask_cors import CORS
import pickle
import json
import pymongo
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
import numpy as np


app = Flask(__name__)
CORS(app)
CORS(app, origins='http://localhost:5173', methods=['POST'], headers=['Content-Type'])


@app.route("/")
def hello_world():
    return "<h1>Hello, World!</h1>"

@app.route("/cardata", methods=['POST'])
def model():
    try:
        raw_data = request.data.decode('utf-8')
        content = json.loads(raw_data)

        jsonObj=content
        

        # Create a DataFrame from the JSON object
        df = pd.DataFrame(jsonObj, index=[0])
        make_dict=pd.read_csv("xywencoded_dict.csv")
        vehicle_class_dict=pd.read_csv("vehicle_class.csv")
        model_dict=pd.read_csv("model_actual.csv")
        print(1)
        # Encode the categorical columns using the dictionaries
        a = df['Make'].map(make_dict)
        b = df['Vehicle Class'].map(vehicle_class_dict)
        df['Model'] = df['Model'].map(model_dict)

        # Encode the 'Model' column using the label encoder
        c = label_encoder.transform(df['Model'])

        l=df.loc[df.index==0]

        l=[int(a),int(b),int(c),list(jsonObj.values())[4],list(jsonObj.values())[5],list(jsonObj.values())[6],list(jsonObj.values())[7],list(jsonObj.values())[8]]

        feat=np.array([l])

        print(2)
        # Make predictions on the new data
        filename='file.pkl'
        loaded_model = pickle.load(open(filename, 'rb'))
        predicted_emission=loaded_model.predict(feat)
        

        #-----------Database Return Value---------------------
        database_value={"useremail":list(content.value())[0],"co2emission":predicted_emission}
        # --------------------------------------------------Database code------------------------------------------------------
        client=pymongo.MongoClient("mongodb+srv://aman:1234@cluster0.fundjn6.mongodb.net/?retryWrites=true&w=majority")
        db=client['Emission']
        emission_col=db['CO2_Emission']
        emission_col.insert_one(database_value)
        x=emission_col.find()
        username=list(content.values())[0]
        ten_emission=[]
        counter=0
        for data in x:
            if(data['useremail']==username):
                if(counter<10):
                    ten_emission.append(data['co2emission'])
                    counter=counter+1
                else:
                    break
        print(3)
        return_value={"co2emission":ten_emission}
        print(return_value)
        return jsonify({"test": 123})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(host="localhost", debug=True)