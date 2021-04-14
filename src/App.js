import './component/BookingHeader.css';
import './component/reset.css';
import './Main.css';
import './component/Boxright.css';
import Headling from './component/Headling.js';
import Topview from './component/Topview.js';
import BoxLeft from './component/BoxLeft.js';
import BoxRight from './component/BoxRight.js';

function App() {
  return (
	<div>
		<Headling />
		<div className="desktopV3">
			<div>
				<div className ="_2XbV5"></div>
				<div>
					<div>
						<div className="_2XbV5">
							<div className="_6gZ6t">
								<Topview />
								<BoxLeft />
								<BoxRight/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
}

export default App;
