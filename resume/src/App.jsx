import { useState, useEffect } from 'react';
import './App.css';

import Card from './components/Card';

import Profile from './images/Profile.png'
import BattleshipsGame from './images/BattleshipsGame.png'
import MemoryGame from './images/MemoryGame.png'
import WarGame from './images/WarGame.png'
import SudokuGame from './images/SudokuGame.png'
import SocialNetWork from './images/SocialNetWork.png'
import ToDoList from './images/ToDoList.png'
import PasswordGen from './images/PasswordGenerator.png'

function App() {
  const [useProfile, setProfile] = useState(Profile);
  const [useNavBut, setNavBut] = useState("");
  const [useDescription, setDescription] = useState("");

  const projects = [
    { image: BattleshipsGame, title: "Battleships Game", description: "Classic board game of battleships, place your ships and destroy enemy fleet.", reference: "https://github.com/Glon8/Battleships-Game" },
    { image: MemoryGame, title: "Memory Game", description: "Old and classic of card games, turn two identical cards to 'burn' them, find all the couples to win.", reference: "https://github.com/Glon8/Memory-Game" },
    { image: WarGame, title: "War Game", description: "War Game, is old and classic game of power, cover your enemy with strengthest card and win all of his deck.", reference: "https://github.com/Glon8/War-Game" },
    { image: SudokuGame, title: "Sudoku", description: "Old chinese game of mathematics, fill all the cells, by ones to nines without interceptions.", reference: "https://github.com/Glon8/Sudoku" },
    { image: SocialNetWork, title: "Social Network Site", description: "A site that mimic a social network like facebook.", reference: "https://github.com/Glon8/Social-Network" },
    { image: ToDoList, title: "To Do List Site", description: "An a site that mimic a Trello site.", reference: "https://github.com/Glon8/To-Do-List" },
    { image: PasswordGen, title: "Password Generator Site", description: "A simple password generator with a few configs available.", reference: "https://github.com/Glon8/Pass-Generator-V4" }];
  
  const [useProjects, setProjects] = useState(projects);

  const [useIndecator, setIndecator] = useState(true);

  const gitLink = "https://github.com/Glon8?tab=repositories";

  const navButSwitch = () => {
    setIndecator(!useIndecator);
  }

  useEffect(() => {
    if (useIndecator) {
      setNavBut("More about me");
      setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed faucibus risus. Nullam elit dui, semper nec maximus eget, mattis nec nibh. Proin facilisis odio et quam rutrum imperdiet. Maecenas dignissim ipsum id nisi ornare, a dapibus mauris rhoncus. Aliquam at feugiat sem. Donec aliquam dolor vitae metus bibendum feugiat. Maecenas egestas et lacus in maximus.");
    }
    else {
      setNavBut("Less about me");
      setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at magna eget nisl mattis laoreet nec ut nisi. Proin congue pharetra metus. Suspendisse potenti. Aenean sed velit velit. Aenean est purus, interdum id arcu ac, consectetur ultrices nisl. Proin id consequat lorem. Pellentesque a ligula venenatis, convallis tortor vel, consequat lectus. Nulla facilisis nunc id bibendum suscipit. Cras facilisis aliquam molestie. Aenean quis neque urna. Pellentesque facilisis est non justo rutrum aliquam. Cras euismod volutpat mauris, quis imperdiet lectus congue eget. Donec fringilla ornare dolor, ut vestibulum ante pharetra sit amet. Nullam nec metus blandit nulla varius euismod semper ac libero. Donec porttitor gravida lectus, sed consequat lorem blandit nec. Vestibulum nec sapien rutrum, dictum ex eget, posuere urna. Nulla ut ex nec metus luctus aliquet. Duis aliquam viverra tincidunt. Nullam sed lorem quis dolor convallis cursus sed non justo. Quisque pellentesque tortor vel aliquam luctus. Ut rutrum finibus ligula, ac auctor tortor venenatis sit amet. Sed at pellentesque risus. Duis ornare imperdiet viverra. Proin accumsan et leo et feugiat. Suspendisse ante odio, tempus et egestas vel, finibus et ipsum. Nullam nec turpis iaculis, tempus lectus eu, sagittis dolor. Nunc pharetra tristique sem at tristique. Suspendisse potenti. Etiam vitae congue ipsum, non egestas lectus. Maecenas interdum leo ut urna porttitor, vitae aliquam lacus cursus. Donec non mi sed dui ornare sagittis sit amet ac erat. Proin vel dolor ut libero volutpat condimentum non eu nunc. Suspendisse tincidunt finibus nulla et rutrum. Fusce semper, nibh ut lobortis rhoncus, nisl sem vehicula nunc, a dapibus felis dolor sed metus. Ut eu nulla posuere, aliquet nibh eu, sagittis mi. Vivamus ac ipsum tincidunt eros aliquet condimentum tristique at lectus. Integer egestas neque non libero vestibulum, eu scelerisque dui malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam semper risus eu.");
    }
  }, [useIndecator]);

  return (<div className='w-screen h-auto lg:px-32 lg:py-16 desk:px-14 smob:px-7 py-8 mBackground'>
    <div className='w-auto lg:max-w-screen-lg lg:mx-auto lg:py-5 lg:px-10 h-auto desk:px-6 smob:px-2 py-2 rounded-xl bg-white/10 blur-box'>

      <div className='w-full h-[30%] flex desk:flex-row smob:flex-col border border-gray-500/10 rounded-xl bg-white/70 '>

        <div className={`desk:ms-3 desk:w-[20%] smob:mx-auto smob:w-[90%] h-fit my-2 ${!useIndecator? 'mt-[15%]' : ''} transition-all delay-25 duration-250`} >
          <img className={`w-auto h-fit rounded-xl`} src={useProfile} alt='photo' />
        </div>
        <div className='w-[80%] h-auto desk:px-3 smob:mx-auto justify-items-center'>

          <h2 className='w-full border-b border-black font-semibold text-4xl'>Resume:</h2>
          <p className='border-b border-black py-1'>{useDescription}</p>
          <input className='py-1 font-medium decoration-wavy text-violet-800 hover:underline hover:font-bold transition-all delay-50 duration-75' value={useNavBut} onClick={navButSwitch} type='button' />

        </div>

      </div>

      <div className='w-full h-auto border-gray-500/10 mt-[2%] rounded-xl px-3 bg-white/70'>

        <div className='py-1 border-b border-black flex desk:flex-row smob:flex-col justify-between'>
          
          <div className='flex md:flex-row smob:flex-col'>
            <h3><b className='font-semibold text-4xl'>My Works</b></h3>
            <p className='md:mt-4'>&nbsp;on <a href={gitLink} className={`text-violet-800 font-medium decoration-wavy hover:underline hover:font-bold transition-all delay-50 duration-75`} >Git: Glon8</a></p>
          </div>
          <p className='text-white pt-4 drop-shadow-md'>(NOTE: At least one picture made with AI)</p>
        </div>
        <div className='grid md:desk:grid-cols-4 desk:grid-cols-3 smob:grid-cols-1 gap-1 auto-rows-fr'>

          {
            useProjects.map((element,index) => {
              return(<Card element={element} key={index} />)
            })
          }

        </div>
        <p className='mt-5 pt-1 pb-3 border-t border-black'><a href={gitLink} className='text-violet-800 font-medium hover:underline decoration-wavy hover:font-bold transition-all delay-50 duration-75' >Git: Glon8</a></p>

      </div>

    </div>

  </div>);
}

export default App;
