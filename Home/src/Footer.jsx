import React from "react";

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    SetFooter=()=>{
return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Boats™</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="http://localhost:3000/" class="mr-4 hover:underline md:mr-6">Home</a>
            </li>
            <li>
                <a href="http://localhost:4000/" class="mr-4 hover:underline md:mr-6">Clients</a>
            </li>
            <li>
                <a href="http://localhost:8001/" class="mr-4 hover:underline md:mr-6">Boats</a>
            </li>
            <li>
                <a href="http://localhost:8080/?" class="hover:underline">Contact</a>
            </li>
        </ul>
    </footer>
    );
    }
    render(){
        return <div>{this.SetFooter()}</div>;
    }
}


export{Footer};