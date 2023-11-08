

function Skills() {
    const mySkills = [
        {name : "potato",
        price : "100",
        isProd : true
    },
    {name : "tomato",
        price : "10",
        isProd : true
    },
    {name : "onion",
        price : "50",
        isProd : true
    },
    {name : "appel",
        price : "300",
        isProd : false
    },
    ];

    return(
            <main>
                {mySkills.map((skills) => {
                    return (
                        <h2>|{skills.name}| =
                            |{skills.price}$|
                        </h2>
                        
                    );
                })}
            </main>
            );
    }

export default Skills;