import React from 'react';

const Signup = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-slate-200">
      <div className="bg-slate-50 p-6 rounded-xl shadow-md shadow-slate-300 w-96">
        <form action="">
          <h2 className="text-blue-600 text-3xl font-semibold mb-4">
            Please Register
          </h2>
          <div className="flex row">
            <div className="w-1/2 mr-1">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="h-8 w-full rounded-md border-slate-300 text-sm p-2 bg-transparent outline-blue-600 shadow-md mt-1"
              />
            </div>
            <div className="w-1/2 mr-1">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                className="h-8 w-full rounded-md border-slate-300 text-sm p-2 bg-transparent outline-blue-600 shadow-md mt-1"
              />
            </div>
          </div>

          {/* email */}

          <div className="w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="h-8 w-full rounded-md border-slate-300 text-sm p-2 bg-transparent outline-blue-600 shadow-md mt-1"
            />
          </div>
          <div className="w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="h-8 w-full rounded-md border-slate-300 text-sm p-2 bg-transparent outline-blue-600 shadow-md mt-1"
            />
          </div>
          <div className="w-full">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="h-8 w-full rounded-md border-slate-300 text-sm p-2 bg-transparent outline-blue-600 shadow-md mt-1"
            />
          </div>
          <div className="my-4">
            <p className="text-lg">Gender</p>
            <input
              type="radio"
              checked
              name="gender"
              id="male"
              className="mx-1"
            />
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" id="female" className="mx-1" />
            <label htmlFor="female">Female</label>

            <input type="radio" name="gender" id="other" className="mx-1" />
            <label htmlFor="other">Other</label>
          </div>

          <input
            type="Submit"
            className="bg-blue-600 text-white block w-full py-4 px-8 cursor-pointer rounded text-2xl hover:bg-blue-800 transition-all hover:outline outline-2 outline-blue-600 outline-offset-2"
          />
          <p className="mt-4">
            Aleady have a account{' '}
            <a href="/" className="text-blue-800 text-lg font-semibold">
              Login
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
