import React, { useState } from "react";
import Axios from "axios";
const SetClientsTable=()=>{
    return(
            <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <a><p class="text-3xl italic text-center mt-10 bold">Clients Management</p></a>
                    <header class="px-5 py-4 border-b border-gray-100">
                        <h2 class="font-semibold text-gray-800">Customers</h2>
                    </header>
                    <div class="p-3">
                        <div class="overflow-x-auto">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Name</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Email</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-left">Boat</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-semibold text-center">Country</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                    <tr>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"/></div>
                                                <div class="font-medium text-gray-800">{getName()}</div>
                                            </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="text-left">{getEmail()}</div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="text-left font-medium text-green-500">{getBoat()}</div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="text-lg text-center">{getCountry()}</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>);
}

const getName=()=>{
    const [name,setName]=useState("");
    Axios.get("http://127.0.0.1:8000/api/clients?page=1").then(
        (response)=>{
            setName(response.data.name);
        }
    )
}
const getEmail=()=>{
    const [email,setEmail]=useState("");
    Axios.get("http://127.0.0.1:8000/api/clients?page=1").then(
        (response)=>{
            setEmail(response.data.email);
        }
    )
}
const getBoat=()=>{
    const [boat,setBoat]=useState("");
    Axios.get("http://127.0.0.1:8000/api/clients?page=1").then(
        (response)=>{
            setBoat(response.data.boat);
        }
    )
}
const getCountry=()=>{
    const [country,setCountry]=useState("");
    Axios.get("http://127.0.0.1:8000/api/clients?page=1").then(
        (response)=>{
            setCountry(response.data.country);
        }
    )
}
export{SetClientsTable};