import React, { useEffect, useState } from "react";
import { v4 } from "uuid"
import { getListGreetings, postGreeting } from "../../api";

export default function CommentSection() {

  const [data, setData] = useState({
    id: null,
    name: null,
    message: null,
    confirmation: "Y",
    created_at: null,
  })
  const [greetings, setGreetings] = useState();

  const ClearForm = () => {
    setData({
      id: null,
      name: null,
      message: null,
      confirmation: "Y",
      created_at: null,
    })
  }

  const HandleChange = (key, value) => {
    setData({
      ...data,
      [key]: value
    })
  }

  const OnSubmit = () => {
    setData({
      ...data,
      id: v4(),
      created_at: new Date().toISOString()
    })
  }

  useEffect(() => {
    if (data?.id) {
      postGreeting([data]).then((res) => {
        setGreetings(res)
        ClearForm()
      }).catch((err) => console.log("Err ===>", err))
    }
  }, [data])
  
  useEffect(() => {
    getListGreetings()
      .then((res) => {
        setGreetings(res)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="box-comment">
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label>Nama</label>
            <input placeholder="cth: Ryan ..." className="form-control" onChange={(e) => HandleChange("name", e.target.value)} />
          </div>
          <div className="form-group">
            <label>Pesan</label>
            <textarea
              type="text"
              placeholder="cth: Samawa ya ..."
              className="form-control"
              style={{ resize: "none" }}
              onChange={(e) => HandleChange("message", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Konfirmasi Kehadiran</label>
            <select className="form-control" onChange={(e) => HandleChange("confirmation", e.target.value)}>
              <option value="Y">Hadir</option>
              <option value="N">Tidak Hadir</option>
            </select>
          </div>
          <div className="form-group">
            <button
              className="btn btn-dark btn-block"
              onClick={() => OnSubmit()}
              disabled={!data?.name || !data?.message}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 item-comment-box">
          {greetings &&
            greetings.map((item, i) => (
              <div key={String(i)} className="row item-comment">
                <div className="col-lg-2 col-md-2 col-xs-2">
                  <span className="box-user">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <div className="col-lg-10 col-md-10 col-xs-10">
                  <p className="item-name">
                    {item.name}{" "}
                    <span
                      className={`badge ${
                        item.confirmation === "Y"
                          ? "badge-success"
                          : "badge-secondary"
                      }`}
                    >
                      <i
                        className={`fas ${
                          item.confirmation === "Y"
                            ? "fa-check-circle"
                            : "fa-times-circle"
                        }`}
                      ></i>{" "}
                      {item.confirmation === "Y" ? "Hadir" : "Tidak Hadir"}
                    </span>
                  </p>
                  <p className="item-date">
                    <i className="far fa-clock"></i>{" "}
                    {item?.created_at ? new Date(item.created_at).toDateString() : "-"}
                  </p>
                  <p className="item-content">{item.message}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
