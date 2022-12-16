import { useLeaderboard } from './useLeaderboard'
import Card from './components/Card'
import { Routes, Route, Link, useMatch, useLocation } from 'react-router-dom'
import classNames from 'classnames'

function App() {
    const [users, loading, error] = useLeaderboard()
    console.log(users)
    const batches = [1, 2, 3, 4, 5]
    const match = useMatch(`/batch`)
    const { pathname } = useLocation()

    return (
        <div className='mx-auto max-w-6xl'>
            <h1 className='mb-8 text-center text-2xl font-bold text-gray-300 md:text-5xl'>
                Techover CSS Battles Leaderboard
            </h1>
            <a
                className='mb-4 block w-max text-xs font-bold text-yellow-400 underline md:text-base'
                href='https://cssbattle.dev/'
                target='_blank'
            >
                Klättra på leaderboarden nu!
            </a>

            {loading ? (
                <div className='mx-auto h-6 w-6 animate-spin rounded-full border-4 border-gray-600 border-t-indigo-700'></div>
            ) : error || !users || users.length === 0 ? (
                <>
                    <h3 className='mt-20 mb-3 text-center text-3xl font-bold text-red-500'>
                        Ser ut som att något gick fel {`:(`}
                    </h3>
                    <p className='text-center text-sm text-red-50'>
                        Var snäll och försök igen eller meddelande Techover om
                        problemet uppstår
                    </p>
                </>
            ) : (
                <>
                    <div className='mb-4 flex flex-wrap gap-0.5 overflow-hidden bg-[#050505] text-white md:rounded-lg'>
                        <Link
                            className={classNames(
                                'block bg-[#030303] px-5 py-2 text-xs font-bold transition-colors md:py-3 md:px-7 md:text-sm',
                                {
                                    'bg-yellow-600': pathname === `/`,
                                }
                            )}
                            to={`/`}
                        >
                            All time Leaderboard
                        </Link>
                        {batches.map((batch) => {
                            return (
                                <Link
                                    key={batch}
                                    className={classNames(
                                        'block bg-[#030303] py-2 px-5 text-xs font-bold transition-colors md:py-3 md:px-7 md:text-sm',
                                        {
                                            'bg-yellow-600':
                                                pathname === `/batch/${batch}`,
                                        }
                                    )}
                                    to={`/batch/${batch}`}
                                >
                                    Batch {batch}
                                </Link>
                            )
                        })}
                    </div>
                    <Routes>
                        <Route
                            path='*'
                            element={
                                <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
                                    {users.map((user, i) => (
                                        <Card user={user} i={i} />
                                    ))}
                                </div>
                            }
                        />
                        {batches.map((batch) => (
                            <Route
                                key={batch}
                                path={`/batch/${batch}`}
                                element={
                                    users.filter((user) => user.batch === batch)
                                        .length === 0 ? (
                                        <div className='mx-auto mt-10 max-w-5xl'>
                                            <h4 className='mb-4 text-center text-2xl font-bold text-white'>
                                                Wow, ser ut som att ingen i
                                                batch {batch} har kört än, bli
                                                först på leaderboarden
                                                leaderboard 🤩🔥
                                            </h4>
                                            <p className='text-center text-sm text-gray-400'>
                                                För att gå med behöver du höra
                                                av dig till någon på Techover
                                                med e länk till din CSS battles
                                                profil så löser de resten
                                            </p>
                                        </div>
                                    ) : (
                                        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
                                            {users
                                                .filter(
                                                    (user) =>
                                                        user.batch === batch
                                                )
                                                .map((user, i) => (
                                                    <Card
                                                        key={user.id}
                                                        user={user}
                                                        i={i}
                                                    />
                                                ))}
                                        </div>
                                    )
                                }
                            />
                        ))}
                    </Routes>
                </>
            )}
        </div>
    )
}

export default App
