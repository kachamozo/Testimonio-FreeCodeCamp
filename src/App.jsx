import './App.css'
import Testimonio from './componentes/Testimonio'
import shawn from './imagenes/testimonio-shawn.png'
import sarah from './imagenes/testimonio-sarah.png'
import emma from './imagenes/testimonio-emma.png'

const data = [
	{
		nombre: 'Wang',
		pais: 'Singapore',
		imagen: shawn,
		cargo: 'Software Engineer',
		empresa: 'Amazon',
		testimonio:
			'It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.',
	},
	{
		nombre: 'Sarah Chima',
		pais: 'Nigeria',
		imagen: sarah,
		cargo: 'Software Engineer',
		empresa: 'ChatDesk',
		testimonio:
			'freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.',
	},
	{
		nombre: 'Emma Bostian',
		pais: 'Sweden',
		imagen: emma,
		cargo: 'Software Engineer',
		empresa: 'Spotify',
		testimonio:
			'Im ve always struggled with learning JavaScript. Im ve taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.',
	},
]

function App() {
	return (
		<div className='App'>
			<div className='contenedor-principal'>
				<h1>Here is what our alumni say about freeCodeCamp:</h1>

				{data.map((e) => {
					return (
						<Testimonio
							nombre={e.nombre}
							pais={e.pais}
							imagen={e.imagen}
							cargo={e.cargo}
							empresa={e.empresa}
							testimonio={e.testimonio}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default App
