import React from 'react';
import './styles.css';
import { WriteUpList } from '../WriteUpList/WriteUpList';
import { WriteUpAdminButtons } from '../WriteUpAdminButtons/WriteUpAdminButtoms';
import { WriteUpWorkButtons } from '../WriteUpWorkButtons/WriteUpWorkButtons';
import { WriteUpMain } from '../WriteUpMain/WriteUpMain';

export function WriteUpContainer(props) {
    return (
        <div className="write-up-container">
            <WriteUpList className="col-1 write-up-list-grid-position test-border"></WriteUpList>
            <div className="col-2 center">
                <WriteUpAdminButtons className="write-up-header col-2 test-border">
                    Header
                </WriteUpAdminButtons>
                <WriteUpMain></WriteUpMain>
            </div>




            <WriteUpWorkButtons className="write-up-work-buttons col-3 test-border">
                Work Buttons
            </WriteUpWorkButtons>

        </div>
    )
}
