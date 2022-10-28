import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase";

const style = {
  form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none boder-none`,
  button: `w-[20%] bg-green-500`,
};

export default function SendMessage({scroll}) {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      const button = document.getElementById("submit");
      button.disable = true;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button
        className={style.button}
        style={{ backgroundColor: !input && "gray" }}
        type="submit"
        name="submit"
      >
        Send
      </button>
    </form>
  );
}
