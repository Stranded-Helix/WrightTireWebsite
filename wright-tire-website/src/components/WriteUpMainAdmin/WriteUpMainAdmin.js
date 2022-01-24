import React, { useState, useEffect } from 'react';
import './styles.css';
import { useWriteUpActiveContext, useWriteUpActiveContextUpdater } from '../WriteUpActiveContext/WriteUpActiveContext';

export function WriteUpMainAdmin () {
    const activeCustomer = useWriteUpActiveContext();
    const updateCustomer = useWriteUpActiveContextUpdater();

    // useEffect(() => {
    //     setCustomer(prevCustomer => ({...prevCustomer, Contextcustomer[0].admin}));
    // }, []);
    
    console.log("MainAdmin");
    console.log(activeCustomer);

    const handleInfoChange = (e) => {
        const updatedCustomer = (customerPrev => ({...customerPrev, admin: {
            ...customerPrev.admin,
            [e.target.name]: e.target.value
        }}))
        updateCustomer('update', updatedCustomer);
        console.log(activeCustomer);
    }

    return (
        <div className='write-up-main-admin'>
                <div className='write-up-main-invoice-container'>
                    <label className='write-up-main-invoice-label'>
                        Invoice
                    </label>
                    <input type='text' className='write-up-main-invoice-input'
                    name='invoice' value={activeCustomer.admin.invoice} onChange={handleInfoChange}>

                    </input>
                </div>
                <div className='write-up-main-key-container'>
                    <label className='write-up-main-key-label'>
                        Key
                    </label>
                    <input type='text' className='write-up-main-key-input'
                    name='key' value={activeCustomer.admin.key} onChange={handleInfoChange}>

                    </input>
                </div>
                <div className='write-up-main-name-container'>
                    <label className='write-up-main-name-label'>
                        name
                    </label>
                    <input type='text' className='write-up-main-name-input'
                    name='name' value={activeCustomer.admin.name} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div className='write-up-main-phone-container'>
                    <label className='write-up-main-phone-label'>
                        phone
                    </label>
                    <input type='text' className='write-up-main-phone-input'
                    name='phone' value={activeCustomer.admin.phone} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div className='write-up-main-year-container'>
                    <label className='write-up-main-year-label'>
                        year
                    </label>
                    <input type='text' className='write-up-main-year-input'
                    name='year' value={activeCustomer.admin.year} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div className='write-up-main-make-container'>
                    <label className='write-up-main-make-label'>
                        Make
                    </label>
                    <input type='text' className='write-up-main-make-input'
                    name='make' value={activeCustomer.admin.make} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div classmodel='write-up-main-model-container'>
                    <label classmodel='write-up-main-model-label'>
                        model
                    </label>
                    <input type='text' classmodel='write-up-main-model-input'
                    name='model' value={activeCustomer.admin.model} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div classmileage='write-up-main-mileage-container'>
                    <label classmileage='write-up-main-mileage-label'>
                        mileage
                    </label>
                    <input type='text' classmileage='write-up-main-mileage-input'
                    name='mileage' value={activeCustomer.admin.mileage} onChange={handleInfoChange}>
                        
                    </input>
                </div>
                <div classlicense='write-up-main-license-container'>
                    <label classlicense='write-up-main-license-label'>
                        license
                    </label>
                    <input type='text' classlicense='write-up-main-license-input'
                    name='license' value={activeCustomer.admin.license} onChange={handleInfoChange}>
                        
                    </input>
                </div>
            </div>
    )
}