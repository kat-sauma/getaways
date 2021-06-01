import React from 'react';

export default function SignUp({ onSubmit, onChange }) {
    return (
        <form onSubmit={onSubmit}>
            <h1>
                New to lil getaways? Sign up here!
            </h1>
            <input
                type="text"
                placeholder="User Name"
                name="user"
                onChange={onChange}
            />
            <input 
                type="text"
                placeholder="Your Email Address"
                name="email"
                onChange={onChange}
            />
            <input 
                type="text"
                placeholder="Create Password"
                name="password"
                onChange={onChange}
            />
            <button>
                Submit
            </button>
        </form>
    );
}
