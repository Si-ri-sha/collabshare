import { db } from "./firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const sendMessage = async (senderId, receiverId, message ) => {
  try {
    await addDoc(collection(db, "chats"), {
      senderId,
      receiverId,
      message,
      timestamp: serverTimestamp(),
    });
    console.log("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message: ", error);
  }
};

export { sendMessage };