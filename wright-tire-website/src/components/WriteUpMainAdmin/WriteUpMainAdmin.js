import React, { useState } from 'react';
import './styles.css';

export function WriteUpMainAdmin () {

    const [customer, setCustomer] = useState({
        id: '',
        invoice: '',
        key: '',
        name: '',
        phone: '',
        year: 0,
        make: '',
        model: '',
        mileage: 0,
        license: '',
        color: ''
    });

    const handleInfoChange = (e) => {
        setCustomer(prevCustomer => ({...prevCustomer, [e.target.name]: e.target.value}))
        console.log(customer);
    }

    return (
        <div className='write-up-main-admin'>
                <div className='write-up-main-invoice-container'>
                    <label className='write-up-main-invoice-label'>
                        Invoice
                    </label>
                    <input type='text' className='write-up-main-invoice-input'
                    name='invoice' value={customer.invoice} onChange={handleInfoChange}>

                    </input>
                </div>
                <div className='write-up-main-key-container'>
                    <label className='write-up-main-key-label'>
                        Key
                    </label>
                    <input type='text' className='write-up-main-key-input'
                    name='key' value={customer.key} onChange={handleInfoChange}>

                    </input>
                </div>
                <div className='write-up-main-name-container'>
                    <label className='write-up-main-name-label'>
                        name
                    </label>
                    <input type='text' className='write-up-main-name-input'
                    name='name' value={customer.name} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div className='write-up-main-phone-container'>
                    <label className='write-up-main-phone-label'>
                        phone
                    </label>
                    <input type='text' className='write-up-main-phone-input'
                    name='phone' value={customer.phone} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div className='write-up-main-year-container'>
                    <label className='write-up-main-year-label'>
                        year
                    </label>
                    <input type='text' className='write-up-main-year-input'
                    name='year' value={customer.year} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div className='write-up-main-make-container'>
                    <label className='write-up-main-make-label'>
                        Make
                    </label>
                    <input type='text' className='write-up-main-make-input'
                    name='make' value={customer.make} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div classmodel='write-up-main-model-container'>
                    <label classmodel='write-up-main-model-label'>
                        model
                    </label>
                    <input type='text' classmodel='write-up-main-model-input'
                    name='model' value={customer.model} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div classmileage='write-up-main-mileage-container'>
                    <label classmileage='write-up-main-mileage-label'>
                        mileage
                    </label>
                    <input type='text' classmileage='write-up-main-mileage-input'
                    name='mileage' value={customer.mileage} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div classlicense='write-up-main-license-container'>
                    <label classlicense='write-up-main-license-label'>
                        license
                    </label>
                    <input type='text' classlicense='write-up-main-license-input'
                    name='license' value={customer.license} onChange={handleInfoChange}>
                        
                    </input>
                </div>
            </div>
    )
}