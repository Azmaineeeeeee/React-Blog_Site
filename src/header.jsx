import profile from '../src/assets/images/profile.png'
const Header = () => {
    
    return (
        <div className='flex justify-between border-b-2 border-black'>
           <h2 className="text-2xl font-bold">Knowledge Cafe</h2>
           <img src= {profile} className='mb-3'></img>
        </div>
    );
};

export default Header;