import React from 'react';
// import Layout from "../components/layout";

const PageRecruit = ({ serverData }) => {

  return (
    <>
      This is a test
    </>
  );
};

export default PageRecruit;

export async function getServerData() {
  return {
    status: 200,
    headers: {},
    props: {}
  }
}