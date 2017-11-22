import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker, Steps, Avatar, Button, notification, Icon } from 'antd';

const Step = Steps.Step;
const ButtonGroup = Button.Group;

var PageInfo = React.createClass({
    openNotification: function () {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    },
    render: function () {
        return (
            <div className="infobox">
                <h2>{this.props.title}</h2>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" onClick={this.openNotification} style={{marginRight:10}}>通知</Button>
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" />Go back
                        </Button>
                        <Button type="primary">
                            Go forward<Icon type="right" />
                        </Button>
                    </ButtonGroup>
                </div>
                <p>{this.props.content}</p>
            </div>
        );
    }
});

function App() {
    return (
        <div className="mainbox">
            <h1>请填写指定的信息</h1><br />
            <hr /><br />
            <Steps current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
            <br />
            <hr /><br />
            <PageInfo title="Ant Design能用vue吗？" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
