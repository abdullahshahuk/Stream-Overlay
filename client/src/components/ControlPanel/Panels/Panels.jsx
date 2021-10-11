import React from 'react';
import './ControlPanel.css';
import Panel from './Panel/Panel';
import { Row, Col, Form, Card, Tabs } from 'antd';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

import LeagueTableTab from './Tabs/LeagueTableTab';
import CurrentMatchupTab from './Tabs/CurrentMatchupTab';
import PlaydayUpcomingMatchesTab from './Tabs/PlaydayUpcomingMatchesTab';
import WebcamLowerThirdTab from './Tabs/WebcamLowerThirdTab';
import WebcamVetoTab from './Tabs/WebcamVetoTab';
import HUDTab from './Tabs/HUDTab';

const { TabPane } = Tabs;

const Panels = ({ currentId, setCurrentId }) => {
  const panels = useSelector((state) => state.panels);

  return (
    !panels.length ? <Spin size="large" /> : (
      <div className="ControlPanelBody">
        <Row gutter={[0, 0]} type="flex" justify="center">
          <Col className="gutter-row" lg={20} sm={24} xs={24}>
            <div className="controlPanelCardAlignment controlPanelCardPadding">
              <Card className="controlPanelCardStyling" style={{ boxShadow: '5px 8px 24px 5px rgba(0, 0, 0, 0.2)' }}>
                <h1 className="centerText">Hunting Grounds Stream Overlay Control Panel</h1>
                {panels.map((panel) => ( setCurrentId(panel._id),
                <Tabs defaultActiveKey="1" centered>
                  <TabPane tab='League Table' key='1'>
                    <LeagueTableTab currentId={currentId} setCurrentId={setCurrentId}/>
                  </TabPane>
                  <TabPane tab='Current Matchup' key='2'>
                    <CurrentMatchupTab currentId={currentId} setCurrentId={setCurrentId}/>
                  </TabPane>
                  <TabPane tab='Playday Upcoming Matches' key='3'>
                     <PlaydayUpcomingMatchesTab currentId={currentId} setCurrentId={setCurrentId}/>
                  </TabPane>
                  <TabPane tab='Webcam & Lower Third' key='4'>
                     <WebcamLowerThirdTab/>
                  </TabPane>
                  <TabPane tab='Webcam & Veto' key='5'>
                     <WebcamVetoTab/>
                  </TabPane>
                  <TabPane tab='HUD' key='6'>
                     <HUDTab/>
                  </TabPane>
                  {/* {panels.map((panel) => (
                    <TabPane tab={panel.name} key={panel._id}>
                      <Panel currentId={currentId} panel={panel} setCurrentId={setCurrentId} />
                    </TabPane>
                  ))} */}
                </Tabs>
                ))}
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  )
}

export default Panels;
