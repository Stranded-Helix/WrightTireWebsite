import React from 'react';
import './styles.css';

export function WriteUpMainWorkItem(props) {
    //props.key, props.title, props.

    const activeWorkEntries = props.entries.map((x, index) =>
        <div key={index} className='write-up-main-work-item-entry-form'>
            <label>{x.question}</label>
            <textarea className='write-up-main-work-item-textarea' value={x.response}></textarea>
        </div>
    )

    return (
        <ol>
            <li className='write-up-main-work-item'>
                <h1 className='write-up-main-work-item-title'>
                    {props.title}
                </h1>
                {activeWorkEntries}
            </li>
        </ol>

    )
}