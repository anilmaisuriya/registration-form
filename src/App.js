import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

function App() {
  let [username, setusername] = useState("");
  let [fusername, setfusername] = useState("");
  let [useerror, setuseerror] = useState("");
  let [errorst, seterrorst] = useState("");
  let [newzip, setnewzip] = useState("");
  let [newfzip, setnewfzip] = useState("");
  let [newziper, setnewziper] = useState("");
  let [ziperst, setziperst] = useState("");
  let [newemail, setnewemail] = useState("");
  let [newfemail, setfnewemail] = useState("");
  let [emer, setemer] = useState("");
  let [padd, setadd] = useState("");
  let [fadd, setfadd] = useState("");
  let [cntr, setcntr] = useState("");
  let [fcntr, setfcntr] = useState("");
  let [st, setst] = useState("");
  let [fst, setfst] = useState("");
  let [ct, setct] = useState("");
  let [fct, setfct] = useState("");
  let [erad, seterad] = useState("");
  let [ercntr, setercntr] = useState("");
  let [erst, seterst] = useState("");
  let [erct, seterct] = useState("");
  function clickHandler(e) {
    setfusername(username);
    e.preventDefault();
    setusername("");

    setnewzip("");
    setfnewemail(newemail);
    setfadd(padd);
    setfcntr(cntr);
    setfst(st);
    setfct(ct);

    if (newziper.length <= 5 && newziper.length != 0) {
      setnewfzip(newziper);
      setziperst("");
    } else {
      setziperst("Invalid zipcode");
      setnewfzip("");
    }

    if (useerror.match(/^[A-Za-z]+$/) && useerror.length != 0) {
      seterrorst("");
      setfusername(useerror);
    } else {
      seterrorst("Invalid username");
      setfusername("");
    }
    if (newfemail.length == 0) {
      setemer("Invalid Email");
    } else {
      setemer("");
    }
    if (padd.length == 0) {
      seterad("Invalid Address");
    } else {
      seterad("");
    }
    if (cntr.length == 0) {
      setercntr("Please select  your country");
    } else {
      setercntr("");
    }
    if (st.length == 0) {
      seterst("Please select  your state");
    } else {
      seterst("");
    }
    if (ct.length == 0) {
      seterct("Please select  your city");
    } else {
      seterct("");
    }
  }
  function changehandler(e) {
    setusername(e.target.value);
    let item = e.target.value;
    setuseerror(item);
  }

  function zipchange(e) {
    let zip = e.target.value;
    setnewzip(zip);
    setnewziper(zip);
  }

  function addhandler(e) {
    setadd(e.target.value);
  }
  function cntrchange(e) {
    setcntr(e.target.value);
  }
  function stchange(e) {
    setst(e.target.value);
  }
  function ctchange(e) {
    setct(e.target.value);
  }
  function emailchange(e) {
    let email = e.target.value;
    setnewemail(email);
  }

  return (
    <>
      <form
        onSubmit={clickHandler}
        style={{ padding: "0px 500px", height: "50px" }}
      >
        <label className="form-label">Name:-</label>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={changehandler}
          value={username}
          id="inputPassword2"
          style={{ width: "500px" }}
        />
        <p style={{ color: "red" }}>{errorst}</p>

        <label className="form-label">Address:-</label>
        <input
          type="text"
          style={{ width: "500px" }}
          id="inputPassword2"
          placeholder="Enter your Address"
          onChange={addhandler}
        />
        <p style={{ color: "red" }}>{erad}</p>

        <div>
          <label for="country" className="form-label">
            Country:-
          </label>
          <select
            id="country"
            aria-label="Default select example"
            style={{ width: "500px" }}
            onChange={cntrchange}
          >
            <option>USA</option>
            <option>India</option>
            <option>Spain</option>
            <option>Russia</option>
          </select>
          <p style={{ color: "red" }}>{ercntr}</p>

          <label for="state" className="form-label">
            State:-
          </label>
          <select
            id="state"
            aria-label="Default select example"
            style={{ width: "500px" }}
            onChange={stchange}
          >
            <option>Maharatra</option>
            <option>Gujarat</option>
            <option>Goa</option>
            <option>Rajasthan</option>
          </select>
          <p style={{ color: "red" }}>{erst}</p>

          <label for="city" className="form-label">
            City:-
          </label>
          <select
            id="city"
            aria-label="Default select example"
            style={{ width: "500px" }}
            onChange={ctchange}
          >
            <option>Baroda</option>
            <option>Surat</option>
            <option>Amhedabad</option>
            <option>Rajkot</option>
          </select>
          <p style={{ color: "red" }}>{erct}</p>
        </div>

        <div>
          <label className="form-label">Zipcode:-</label>
          <input
            type="text"
            placeholder="Enteryou zip code"
            onChange={zipchange}
            value={newzip}
            id="formGroupExampleInput"
            style={{ width: "500px" }}
          />
          <p style={{ color: "red" }}>{ziperst}</p>
        </div>

        <div>
          <label className="form-label">Email:-</label>
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={emailchange}
            id="formGroupExampleInput"
            style={{ width: "500px" }}
          />
          <p style={{ color: "red" }}>{emer}</p>
        </div>

        <input
          type="submit"
          className=" btn btn-secondary"
          id="formGroupExampleInput"
          style={{ width: "500px" }}
        />
      </form>
      <div style={{ display: "inline", border: "1px solid black" }}>
        <p>name is:- {fusername}</p>
        <p>Address:-{fadd}</p>
        <p>Country:-{fcntr}</p>
        <p>State:-{fst}</p>
        <p>City:-{fct}</p>
        <p>Zipcode:-{newfzip}</p>
        <p>Email:-{newfemail}</p>
      </div>
    </>
  );
}

export default App;
