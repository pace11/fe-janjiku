/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { postRegister } from '../../../api'
import { generateIdRegister } from '../../../utils'

const FormRegister = React.memo(
  ({ packages, template, showModal }) => {
    const [isCompleted, setIsCompleted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [invoiceId, setInvoiceId] = useState(null)
    const [data, setData] = useState({
      id: null,
      name: null,
      phone: null,
      desc: null,
      packages: null,
      template: null,
      date: null,
      status: 0,
    })

    const clearForm = () => {
      setData({
        ...data,
        id: null,
        name: null,
        phone: null,
        desc: null,
        packages: null,
        template: null,
        date: null,
        status: 0,
      })
    }

    const handleSubmit = () => {
      setData({
        ...data,
        id: generateIdRegister(),
        date: new Date().toJSON(),
      })
    }

    const handleChange = (key, value) => {
      setData({
        ...data,
        [key]: value,
      })
    }

    useEffect(() => {
      setData({
        ...data,
        packages,
        template,
      })
    }, [packages, template])

    useEffect(() => {
      if (data?.id) {
        setIsLoading(true)
        postRegister([data])
          .then((res) => {
            setInvoiceId(data?.id)
            if (
              res.data &&
              res.data.updatedRange.includes('register')
            ) {
              setIsLoading(false)
              setIsCompleted(true)
            }
            clearForm()
          })
          .catch((err) => console.log('Err ===>', err))
      }
    }, [data])

    useEffect(() => {
      if (!showModal) {
        setIsCompleted(false)
      }
    }, [showModal])

    return (
      <div className="row">
        {!isCompleted ? (
          <div className="col-md-12 col-lg-12 col-xs-12">
            <div className="form-group">
              <label>Nama Pemesan</label>
              <input
                placeholder="cth: Ryan Pace ..."
                className="form-control"
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>No HP Pemesan (aktif)</label>
              <input
                placeholder="cth: 08xx xxxx xxxx"
                className="form-control"
                onChange={(e) =>
                  handleChange('phone', e.target.value)
                }
              />
            </div>
            <div className="form-group">
              <label>
                Deskripsi singkat (akan di follow up lebih lanjut oleh
                kami)
              </label>
              <textarea
                type="text"
                placeholder="cth: akad nikah berlangsung pada tgl ..., resepsi akan berlangsung pada tgl ..."
                className="form-control"
                style={{ resize: 'none' }}
                rows={4}
                onChange={(e) => handleChange('desc', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Pilihan Paket</label>
              <input
                placeholder="cth: Ryan ..."
                defaultValue={packages}
                className="form-control"
                disabled
              />
            </div>
            <div className="form-group">
              <label>Pilihan Template</label>
              <input
                placeholder="cth: Ryan ..."
                defaultValue={template}
                className="form-control"
                disabled
              />
            </div>
            <button
              className="btn btn-block"
              onClick={handleSubmit}
              disabled={
                !data.name ||
                !data.phone ||
                !data.desc ||
                !data.packages ||
                !data.template ||
                isLoading
              }
            >
              {!isLoading ? `Daftar` : `Loading ...`}
            </button>
          </div>
        ) : (
          <div className="col-md-12 col-lg-12 col-xs-12 text-center">
            <h4>Pendaftaran Berhasil</h4>
            <img
              className="img-2"
              src={
                require('../../../images/successfully.gif').default
              }
              width="300"
              alt=""
            />
            <p className="id-register">
              <a href="#a">{invoiceId}</a>
            </p>
            <p>
              Untuk melihat status pemesanan, bisa langsung mengklik
              invoice diatas. Silahkan simpan invoice tersebut untuk
              mengecek status pesanan anda.
            </p>
          </div>
        )}
        <style>
          {`
          .id-register a {
            color: #000;
          }
          .id-register a:hover {
            text-decoration: underline !important;
          }
        `}
        </style>
      </div>
    )
  },
)

export default FormRegister
