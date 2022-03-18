export function Dashboard() {
    async function handleSignOut() {
      // @TODO: add sign out logic
    }
  
    return (
    <div className="m-auto">
        <h1 className="floatingSlow">Spacy Space</h1>
        <h2 className="floatingFast">A Brief Look At NASA's APOD API</h2>
        <button className="bg-transparent mt-5 px-2 border-4 border-white-500 rounded-full w-1/4">
            LOGIN
        </button>
        <br />
        <button className="bg-transparent mt-2 border-4 border-white-500 rounded-full w-1/4">
          REGISTER
        </button>
    </div>
    )
  }