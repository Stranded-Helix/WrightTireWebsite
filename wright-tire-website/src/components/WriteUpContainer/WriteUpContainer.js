import React from 'react';
import './styles.css';
import { WriteUpList } from '../../components/WriteUpList/WriteUpList';
import { WriteUpAdminButtons } from '../../components/WriteUpAdminButtons/WriteUpAdminButtoms';
import { WriteUpWorkButtons } from '../../components/WriteUpWorkButtons/WriteUpWorkButtons';
import { WriteUpMain } from '../../components/WriteUpMain/WriteUpMain';

export function WriteUpContainer(props) {
    return (
        <div className="write-up-container">
            <WriteUpList className="col-1 write-up-list-grid-position test-border"></WriteUpList>
            <div className="col-2 center">
                <WriteUpAdminButtons className="write-up-header col-2 test-border">
                    Header
                </WriteUpAdminButtons>
                <WriteUpMain></WriteUpMain>
                <div className="write-up-sheet write-up-main-grid-position test-border">
                    Write up Sheet
                    Customer Name
                    Vehicle Info
                    <div className="test-line-work">
                        <div className="test-line-work-title">
                            Flat Repair
                        </div>
                        <div className="test-line-work-info">
                            Passenger Rear
                        </div>
                        <div className="test-line-work-notes">
                            Found nail, repaired
                        </div>
                    </div>
                    <div className="test-line-work">
                        <div className="test-line-work-title">
                            LOF
                        </div>
                        <div className="test-line-work-info">
                            6QT, Check Air Filter
                        </div>
                    </div>
                    <div className="test-line-work">
                        <div className="test-line-work-title">
                            Tire Light
                        </div>
                        <div className="test-line-work-info">
                            Diag.
                        </div>
                    </div>
                </div>
            </div>




            <WriteUpWorkButtons className="write-up-work-buttons col-3 test-border">
                Work Buttons
            </WriteUpWorkButtons>

        </div>
    )
}
