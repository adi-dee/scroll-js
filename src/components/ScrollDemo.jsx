import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import '../App.css'
import View4 from '/view-4.png';
import View3 from '/view-3.png';
import View2 from '/view-2.png';
import View1 from '/view-1.png';

const ScrollamaDemo = () => {
    const [movementFirstTree, setMovementFirstTree] = useState('0');
    const [movementSecondTree, setMovementSecondTree] = useState('0');
    const [movementThirdTree, setMovementThirdTree] = useState('0');
    const [changeProgress, setChangeProgress] = useState({
        data: 0,
        progress: 0,
    });
    const [sectionIsFinished, setSectionIsFinished] = useState(true);
    const [showTimeline, setShowTimeline] = useState(false);  // State to control timeline visibility


    const onStepProgress = (progress) => {
        if (progress) {
            console.log('Progress', progress.progress, 'at section',progress.data);
            setMovementFirstTree(`${progress.progress * 10}%`);
            setMovementSecondTree(`${progress.progress * 8}%`);
            setMovementThirdTree(`${progress.progress * 3}%`);
            setChangeProgress(progress);
        }
    };

    const onStepExit = ({ data }) => {
        console.log('Exit section', data);
        if (data === 4) {
            setSectionIsFinished(false);
        }
        if (data === 5) {
            setShowView3(false); 
        }
    }
    const onStepEnter = ({ data }) => {
        console.log('Enter section', data);
        if (data >= 6) {
            setShowTimeline(true);
        } else {
            setShowTimeline(false);
        }
    }
    

    return (
        <div style={{border: '2px dashed skyblue', maxWidth: '100%', overflowX: 'hidden'}}>
            <div className="section-1">
            <div style={{position: 'sticky', top: 0, border: '1px solid orchid'}}>
                I'm sticky. The current triggered step index is:
                Data: {changeProgress?.data} Progress: {changeProgress?.progress}%
            </div>
            <div className='bg-1' style={{ position: "relative", marginBottom: '100%'}}>
                 <img className='tree' src={View4} alt="tree"
                     style={{ left: movementFirstTree }}/>
                <img  className='tree' src={View3} alt="more-trees"
                     style={{ left: movementSecondTree , marginLeft: '-300px'}}/>
                <img  className='tree' src={View2} alt="tree"
                     style={{ left: movementThirdTree  , marginLeft: '-300px'                    }}/>
                <img  className='tree' src={View1} alt="more-trees" />
            <Scrollama offset={0.0} onStepExit={onStepExit} onStepEnter={onStepEnter} onStepProgress={onStepProgress} debug>
                <Step data={1} key={1}>
                    <div style={{
                        height: '600px',  display: 'flex', justifyContent: 'flex-start', alignItems: 'center'
                    }}>
                        <div className="text-box" style={{textAlign: 'left', width: '60%'}}>
                            1.Section:
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                            purus nec purus fermentum ultricies. Donec ac neque nec justo
                            fermentum ultricies.
                        </div>
                    </div>
                </Step>
                <Step data={2} key={2}>
                    <div style={{
                        height: '600px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <div className="text-box" style={{textAlign: 'right', width: '60%'}}>
                            2.Section
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                            purus nec purus fermentum ultricies. Donec ac neque nec justo
                            fermentum ultricies.
                        </div>
                    </div>
                </Step>
                <Step data={3} key={3}>
                    <div style={{
                        height: '600px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <div className="text-box" style={{textAlign: 'right', width: '60%'}}>
                            2.Section
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                            purus nec purus fermentum ultricies.
                        </div>
                    </div>
                </Step>
            </Scrollama>
            </div>
            </div>
            <div className="section-2" style={{height: '1000px'}}>
                <div>
                    <h3>Content below the Scrollama component</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                        purus nec purus fermentum ultricies. Donec ac neque nec justo
                        fermentum ultricies. Donec ac neque nec justo fermentum ultricies.
                        Donec ac neque nec justo fermentum ultricies. Donec ac neque nec justo
                        fermentum ultricies. Donec ac neque nec justo fermentum ultricies.
                    </p>
                </div>
            </div>
            <div className="section-3" style={{ position: "relative" }}>
            </div>
        </div>
    );
};

export default ScrollamaDemo;