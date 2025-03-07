import { useState } from "react";
import axios from "axios";

export default function Create() {
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')

    const handler = async () => {
        try {
            await axios.post('http://localhost:4000/api/v1/', {
                title,
                des,
                load: '1'
            })
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <>
      <form  className="flex flex-col gap-5 w-full">
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Type Here ..." required className="input w-full validator" />
        <textarea onChange={(e) => setDes(e.target.value)} className="textarea w-full validator" required placeholder="Description ..."></textarea>
        <button className="btn btn-success" onClick={handler}>ADD</button>
      </form>
    </>
  );
}
