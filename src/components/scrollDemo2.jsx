import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import '../App.css'
import View4 from '/view-4.png';
import View3 from '/view-3.png';
import View2 from '/view-2.png';
import View1 from '/view-1.png';

const ScrollamaDemo2 = () => {
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
        <div style={{border: '2px dashed skyblue'}}>
            <div className="section-1">
            <div style={{position: 'sticky', top: 0, border: '1px solid orchid'}}>
                I'm sticky. The current triggered step index is:
                Data: {changeProgress?.data} Progress: {changeProgress?.progress}%
            </div>
            <div style={{height: 100, position: "sticky", top: "0", marginBottom: '100%'}}>
             <div  style={{position: "relative"}}> 
                 <img className='tree' src={View4} alt="tree"
                     style={{ left: movementFirstTree }}/>
                <img  className='tree' src={View3} alt="more-trees"
                     style={{ left: movementSecondTree }}/>
                <img  className='tree' src={View2} alt="tree"
                     style={{ left: movementThirdTree }}/>
                <img  className='tree' src={View1} alt="more-trees" />
            </div> 
            </div>
            <Scrollama offset={0.0} onStepExit={onStepExit} onStepEnter={onStepEnter} onStepProgress={onStepProgress} debug>
                <Step data={1} key={1}>
                    <div style={{
                        height: '400px',
                        border: '1px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'
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
                        height: '400px',
                        border: '1px solid blue',
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
                        height: '400px',
                        border: '1px solid blue',
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
        
                <Scrollama offset={0.0} onStepExit={onStepExit} onStepProgress={onStepProgress} debug>
                <div style={{ position: "fixed", top: '100px', fontSize: 40}}>
                    {showTimeline ? `Timeline: 190${changeProgress.data}` : ''}
                </div>

                    <Step data={6} key={6}>
                        <div style={{
                            height: '400px',
                            background: changeProgress.data === 6 ? 'yellow' : 'lightgoldenrodyellow',
                            border: '1px solid yellow', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'
                        }}>
                            <div className="text-box" style={{textAlign: 'left', width: '60%'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                                purus nec purus fermentum ultricies. Donec ac neque nec justo
                                fermentum ultricies. Donec ac neque nec justo fermentum ultricies.
                                Donec ac neque nec justo fermentum ultricies. Donec ac neque nec justo
                                fermentum ultricies. Donec ac neque nec justo fermentum ultricies.
                            </div>
                        </div>
                    </Step>
                    <Step data={7} key={7}>
                        <div style={{
                            height: '400px',
                            border: '1px solid green',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <div style={{textAlign: 'right', width: '60%'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                                purus nec purus fermentum ultricies. Donec ac neque nec justo
                                fermentum ultricies. Donec ac neque nec justo fermentum ultricies.
                                Donec ac neque nec justo fermentum ultricies. Donec ac neque nec justo
                                fermentum ultricies. Donec ac neque nec justo fermentum ultricies.
                            </div>
                        </div>
                    </Step>
                    <Step data={8} key={8}>
                        <div style={{
                            height: '400px',
                            border: '1px solid green',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <div style={{textAlign: 'right', width: '60%'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                                purus nec purus fermentum ultricies. Donec ac neque nec justo
                                fermentum ultricies. Donec ac neque nec justo fermentum ultricies.
                                Donec ac neque nec justo fermentum ultricies. Donec ac neque nec justo
                                fermentum ultricies. Donec ac neque nec justo fermentum ultricies.
                            </div>
                        </div>
                    </Step>
                    <Step data={9} key={9}>
                        <div style={{
                            height: '400px',
                            background: 'red',
                            border: '1px solid green',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <div style={{textAlign: 'right', width: '60%'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                                purus nec purus fermentum ultricies. Donec ac neque nec justo
                                fermentum ultricies. Donec ac neque nec justo fermentum ultricies.
                                Donec ac neque nec justo fermentum ultricies. Donec ac neque nec justo
                                fermentum ultricies. Donec ac neque nec justo fermentum ultricies.
                            </div>
                        </div>
                    </Step>
                </Scrollama>
            </div>
        </div>
    );
};

export default ScrollamaDemo2;