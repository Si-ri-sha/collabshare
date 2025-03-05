import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../firebase/firebaseConfig";

const db = getFirestore(app);

const sendMessage = async (userId, messageText) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      userId,
      text: messageText,
      timestamp: new Date(),
    });
    console.log("Message sent with ID:", docRef.id);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export default sendMessage;
