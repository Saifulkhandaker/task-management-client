import about from '../../assets/images/About.png';
import map from '../../assets/images/map.png';

const About = () => {
    return (
        <div>
             <div className="hero mt-10 shadow-xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                    <h1 className="text-6xl font-medium">We do <br /> what we love, <br />for the better</h1>
                    <p className="py-6 text-xl">We lucubrate in the realm of time, empowering everyone the ability and peacefulness to stay organized, stay creative.</p>
                    </div>
                    <img src={about} className="w-96 lg:w-[50%] rounded-lg " />
                </div>
            </div>
            <div className='mt-16 w-[80%] mx-auto space-y-5'>
                <h1 className=' text-4xl lg:text-6xl font-medium'>One Team, One Goal</h1>
                <p className='text-2xl'>We are a diversified team mainly based in the United States. Some code, some write; some are time masters, some are fighting with procrastination. What brings us together is the deep belief in the art of time management; the passion to build a simple, but not simpler product; and the goal to help everyone boost productivity and enjoy life.</p> <br />
                <p className='text-2xl'>In as early as 2010, the founding team began the endeavor with an Android app called GTasks, which syncs with Google Tasks. At that time, the app was listed as "one of the best todo list apps" at Google Play Store. In 2013, we officially launched TickTick. This new app derives from GTasks, but has a lot more functionalities and can sync across multiple platforms.</p> <br />
                <p className='text-2xl'>The team has been dedicating in the realm of time for a decade with great love. We value our users' experience, and continuously develop innovative features to make the app ever more stable and smooth. TickTick is one of the very first to-do list apps to creatively integrate features such as Calendar, Pomodoro Timer, Habit, into one functional app. Users are at our heart, and the inexhaustible source of power to make TickTick grow.</p> <br />
                <img src={map} alt="" /> <br />
                <p className='text-2xl mt-5 pb-5'>To learn more about the team, or have any questions, you're more than welcome to contact us at <span className='text-blue-500 font-medium'>support@ticktick.com.</span></p>
            </div>
        </div>
    );
};

export default About;