import React from "react";
import Notification from '../utils/Notification';

function Home() {
  function Notify() {
    Notification.toast('Test Notification!', 'info')
  }
  return (
    <main>
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <h2 className="font-xl">Welcome Adventurer!</h2>
          <div className="b-line w-75 mx-auto my-3"></div>
          <button type="button" className="btn btn-lg btn-primary my-2" onClick={() => Notify()}>Notification</button>
        </div>
      </div>
    </main>
  );
}

export default Home;
