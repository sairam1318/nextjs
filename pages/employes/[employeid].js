import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const EmployeId = ({ employe }) => {
    const [name, setName] = React.useState('sairam');
    React.useEffect(() => {
        setName("tecnics");
    }, [])


  return (
    <div>
        <div className="box-class">Employe name is: {employe} ............ {name}</div>
        <Head>
        <title>Tecnics Employement App</title>
      </Head>
       <style jsx>{`
        .box-class {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: red;
          background: black;
        }
      `}</style>
    </div>
    
  );
};

export const getStaticPaths = async () => {
    const listOfEmployes = [
        {
          id: '1',
          name: "sai",
        },
        {
          id: '2',
          name: "ram",
        },
      ];
    
      const paths = listOfEmployes.map(emp => {
        return {
            params: {
                employeid: emp.id,
            }
        }
      })
      console.log("inside get static paths")

    return {
        paths: paths, //indicates that no page needs be created at build time
        fallback: false //indicates the type of fallback
    }
}
export async function getStaticProps(context) {
  // Call an external API endpoint to get posts
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const employeId = context.params.employeid;
  console.log("inside get static props")
  return {
    props: {
        employe: employeId
    },
  };
}

export default EmployeId;
