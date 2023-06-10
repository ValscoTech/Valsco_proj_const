from flask import Flask, request, jsonify
import json
from flask_cors import CORS
import pickle
import json
import pymongo
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
import pickle
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
import warnings
warnings.filterwarnings('ignore')

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
    

        # make_dict=pd.read_csv("xywencoded_dict.csv")
        # vehicle_class_dict=pd.read_csv("vehicle_class.csv")
        # model_dict=pd.read_csv("model_actual.csv")

        make_dict = pd.read_csv('xywencoded_dict.csv').set_index('make').to_dict()['Encoded_Value']
        vehicle_class_dict = pd.read_csv('vehicle_class.csv').set_index('vehicle_class').to_dict()['Encoded_Value']
        model_dict = pd.read_csv('model_actual.csv').set_index('model').to_dict()['Encoded_Value']

        print(1)
        # return jsonify({{"day": "day1", "co2emission": 196}, {"day": "day2", "co2emission": 221}, {"day": "day2", "co2emission": 136}, {"day": "day3", "co2emission": 255}, {"day": "day4", "co2emission": 244}, {"day": "day5", "co2emission": 230}, {"day": "day6", "co2emission": 222}, {"day": "day7", "co2emission": 212}, {"day": "day8", "co2emission": 256}, {"day": "day9", "co2emission": 354}, {"day": "day10", "co2emission": 230}})
        # Encode the categorical columns using the dictionaries
        # a = df['Make'].map(make_dict)
        a=make_dict[df['make'].values[0]]
        print(a)
        b = vehicle_class_dict[df['vehicle_class'].values[0]]
        # df['model'] = df['model'].map(model_dict)

        # Encode the 'Model' column using the label encoder
        print(100)
        label_encoder = LabelEncoder()
        c = model_dict[df['model'].values[0]]

        l=df.loc[df.index==0]

        l=[int(a),int(b),int(c),list(jsonObj.values())[4],list(jsonObj.values())[5],list(jsonObj.values())[6],list(jsonObj.values())[7],list(jsonObj.values())[8]]

        feat=np.array([l])

        print(2)
        # Make predictions on the new data
        filename='file.pkl'
        print(5)
        # loaded_model = pickle.load(open(filename, 'rb'))
        predicted_emission = 0
        with open('file.pkl', 'rb') as file:
            loaded_clf = pickle.load(file)
            predicted_emission=loaded_clf.predict(feat)
        print(predicted_emission)
        print(3)

        #-----------Database Return Value---------------------
        database_value={"useremail":list(jsonObj.values())[0],"co2emission":int(predicted_emission)}
        print(database_value)
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
        return jsonify(return_value)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(host="localhost", debug=True)