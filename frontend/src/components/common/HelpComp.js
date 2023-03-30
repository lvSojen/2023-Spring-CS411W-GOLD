import Table from 'react-bootstrap/Table';
import React from "react"
function HelpComp() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th></th>
          <th>Step 1
            <br></br>
            Enter your Information
          </th>
          <th>Step 2
          <br></br>
          Choose Your Title
          </th>
          <th>Step 3
          <br></br>
          Select Your Copy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
             <p>
                Enter information about the book on the BookedSearch home page.
            </p>
            </td>
          <td><p>
                Once you entered the information, you will get a list of books that match your search.
            </p>
            <p>
                Choose the title that is closest to your search.
            </p>
            </td>
          <td>
            <p>
                You will see used and new books matching search criteria, with prices and descriptions of each book. 
                Any available formats and bindings of the book will also be listed.
            </p>
            <p>
                Click on the book cover to find out how to order the book.
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <ul>
                <li>
                    For best results enter the author, title and ISBN.
                </li>
                <li>
                    No initials, subtitles or middles names are included for search crtieria.
                </li>
                <li>
                    Make sure to fill out as much search criteria as possible.
                </li>
            </ul>
          </td>
          <td>
            <ul>
                <li>
                    The same title can be spelled in two different ways.
                </li>
                <li>
                    There are also conditions, editions, bindings and format to help narrow down the search.
                </li>
            </ul>
          </td>
          <td>
            <ul>
                <li>
                    Note down which bookseller you're buying the book from.
                </li>
                <li>
                    If book new and used books are found, they will be listed together on the search page.
                </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default HelpComp;