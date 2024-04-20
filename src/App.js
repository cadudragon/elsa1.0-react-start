import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <wf-designer-host
        id="designerHost2"
        canvas-height="300vh"
        plugins="PrimitiveActivities ControlFlowActivities EmailActivities HttpActivities ConsoleActivities MassTransitActivities TimerActivities"
        data-activity-definitions='[{"type": "Custom", "displayName": "Custom", "description": "Custom Activity", "category": "Custom", "designer": { "outcomes": ["Done"] }}]'
        data-workflow='{"activities":[{"id":"timer","top":137,"left":1171,"type":"TimerEvent","state":{}, "executed":true},{"id":"send-email","top":641,"left":993,"type":"SendEmail","state":{}, "blocking":true},{"id":"if-else","top":378,"left":1139,"type":"IfElse","state":{}},{"id":"log","top":644,"left":1438,"type":"Log","state":{}, "faulted":true, "message":{"title":"Faulted","content":"This didnt work."}}],"connections":[{"sourceActivityId":"timer","destinationActivityId":"if-else","outcome":"Done"},{"sourceActivityId":"if-else","destinationActivityId":"send-email","outcome":"True"},{"sourceActivityId":"if-else","destinationActivityId":"log","outcome":"False"}]}'
        readonly="false"
      />
    </div>
  );
}

export default App;
