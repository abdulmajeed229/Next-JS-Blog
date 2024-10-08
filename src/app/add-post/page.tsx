"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../Database/firebase.config";
import Swal from 'sweetalert2';

function Add() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    async function sendContent() {
        // Validate if any field is empty
        if (!title || !image || !content) {
            // Show error alert if any field is empty
            Swal.fire({
                title: 'Incomplete Form',
                text: 'Please fill in all the fields before submitting!',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return; // Stop further execution if fields are empty
        }

        try {
            const docRef = await addDoc(collection(db, "users"), {
                title: title,
                image: image,
                content: content
            });

            // Show success SweetAlert and reload page after closing the alert
            Swal.fire({
                title: 'Success!',
                text: 'Your post has been added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.reload();  // Reload after user clicks 'OK'
            });

        } catch (e) {
            // Show error SweetAlert if something goes wrong
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong, please try again!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    return (
        <div className="min-h-[100vh] w-full flex justify-center items-center p-5">

            <div className="min-h-[600px] w-[800px] bg-white shadow-xl flex flex-col justify-center items-center p-5 animate-[wow]">
                <h1 className="text-[25px] font-semibold">Add Post</h1>

                <input 
                    type="text" 
                    className="h-[50px] w-[100%] rounded border border-[#c7c4c4] mt-[10px] outline-none pl-2" 
                    placeholder="Post Title*" 
                    onChange={(e) => setTitle(e.target.value)} 
                />

                <br />

                <input 
                    type="text" 
                    className="h-[50px] w-[100%] rounded border border-[#c7c4c4] outline-none pl-2" 
                    placeholder="Image URL*" 
                    onChange={(e) => setImage(e.target.value)} 
                />

                <br />

                <textarea 
                    className="h-[200px] w-[100%] rounded border border-[#c7c4c4] outline-none pl-2 p-2" 
                    placeholder="Write Content*" 
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>

                <br />

                <button 
                    className="h-[40px] w-[120px] rounded-md bg-[#1A73E8] text-white" 
                    onClick={sendContent}
                >
                    Add Now
                </button>
            </div>
        </div>
    );
}

export default Add;
