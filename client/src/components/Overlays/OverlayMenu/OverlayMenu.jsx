import React from 'react';
import './OverlayMenu.css';
import 'antd/dist/antd.css';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

function OverlayMenu() {
    return (
        <div className="OverlayMenuBody">
            <Row justify="space-around" gutter={[24, 24]} align="middle" style={{display: 'flex', height: '100vh'}}>
                <Col>
                    <Card bordered={false} style={{textAlign: 'center', backgroundColor: 'transparent'}}>
                        <Link to="/overlays/leaguetable"><p style={{color: 'black', fontSize: 'x-large'}}>League Table</p></Link>
                        <hr style={{color: 'black'}}/>
                        <br/>
                        <Link to="/overlays/currentmatchup"><p style={{color: 'black', fontSize: 'x-large'}}>Current Matchup</p></Link>
                        <hr style={{color: 'black'}}/>
                        <br/>
                        <Link to="/overlays/upcomingmatches"><p style={{color: 'black', fontSize: 'x-large'}}>Playday Upcoming Matches</p></Link>
                        <hr style={{color: 'black'}}/>
                        <br/>
                        <Link to="/overlays/webcamlowerthird"><p style={{color: 'black', fontSize: 'x-large'}}>Webcam & Lower Third</p></Link>
                        <hr style={{color: 'black'}}/>
                        <br/>
                        <Link to="/overlays/webcamveto"><p style={{color: 'black', fontSize: 'x-large'}}>Webcam & Veto</p></Link>
                        <hr style={{color: 'black'}}/>
                        <br/>
                        <Link to="/overlays/hud"><p style={{color: 'black', fontSize: 'x-large'}}>HUD</p></Link>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default OverlayMenu;