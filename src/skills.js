

function Skills() {
    const mySkills = ["Python" , "JavaScript" , "linux" , "HTML.CSS"];

    return(
            <main>
                {mySkills.map((skills) => {
                    return (
                        <h2>{skills}</h2>
                    );
                })}
            </main>
            );
    }

export default Skills;