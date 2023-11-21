import database from "../../firebase.config";
import { ref, set } from "firebase/database";

export async function addinfo(
	email,
	firstName,
	lastName,
	message,
	phoneNumber,
	enquiryType
) {
	const data = {
		email: email,
		fname: firstName,
		lname: lastName,
		message: message,
		mobile: phoneNumber,
		querytype: enquiryType,
	};
	try {
		await set(ref(database, "contact_form/" + email), data);
		console.log("Added data to database");
	} catch (e) {
		console.error("Error adding to database: ", e);
	}
}

// export async function addinfo(
//   firstName,
//   lastName,
//   email,
//   phoneNumber,
//   enquiryType,
//   message
// ) {
//   console.log("Recieved Data");
//   //   console.log(firstName, lastName, email, phoneNumber, enquiryType, message);

//   try {
//     const docRef = await addDoc(collection(db, "contact_form"), {
//       email: email,
//       fname: firstName,
//       lname: lastName,
//       message: message,
//       mobile: phoneNumber,
//       querytype: enquiryType,
//     });

//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }
