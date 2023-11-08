

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

    return (
        <main>
          {mySkills.map((skill) => { 
           return (
             <>
             {skill.isProd && (
          <div>
          <p>{skill.name} | {skill.price}</p>
          </div>
          )}
          </>
              );
           })}
         </main>
       );
     }

export default Skills;