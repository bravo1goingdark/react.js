import PropTypes from "prop-types";
import { useState } from "react";

export const EffectPost = ({userId , title , body}) => {
    return(
        <div style={{border : "2px solid white" , padding : "2px"}}>
          <span>UserId : {userId}</span><br />
          <span>Title : {title}</span><br />
          <span>Body : {body}</span><br />
        </div>
    );
}

export const UploadForm = () => {
    const [form , setForm] = useState({
        userId : 1,
        title : "title",
        body : "body"
    })
    return(

        <form onSubmit={(e) => {
            e.preventDefault();
            const postData = async () => {
                const promisedData = await fetch("https://jsonplaceholder.typicode.com/posts" , {
                    method : "POST",
                    body: JSON.stringify(form),
                    headers : {
                        "Content-Type" : "application/json"
                    }
                });
                if(!promisedData.ok){
                    return console.log("not posted")
                }
                console.log((await promisedData).status)
                console.log("posted successfully");
            }
            postData();
        }}>

            <label htmlFor="title">title : </label>
            <input type="text" value={form.title} name = "title" id="title" onChange={(e) => setForm((data) => ({...data , title : e.target.value}))} />
            <br />
            <label htmlFor="body">body :</label>
            <input type="text" value= {form.body} name="body" id="body" onChange={(e) => setForm((data) => ({...data , body : e.target.value}))} />
            <br />
            <button>submit</button>

        </form>
    );
}
EffectPost.propTypes = {
    userId : PropTypes.number,
    title : PropTypes.string,
    body : PropTypes.string
}