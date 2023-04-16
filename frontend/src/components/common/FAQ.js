import React from "react"
import { Link } from "react-router-dom"

function FAQ() {
  return (
       <div>
          <h3>Frequently Asked Questions</h3>
           <ul>
            <li>
              Can I sell you my books?
            </li>
           </ul>
           <ul>
            <li>
              I have a problem buying from the bookseller mentioned. What can I do?
            </li>
           </ul>
           <ul>
            <li>
            I couldn't find the book I needed. What do I do now?
            </li>
           </ul>
           <ul>
            <li>
              Can you tell me more about a particular book?
            </li>
           </ul>
           <hr style={{ border: "none", height: "1px", backgroundColor: "black", cursor: "default" }} />
           <dt id="1">Can I sell you my books?</dt>
           <dd>
            <p>
              In order to sell your books, you can check back with a local book store. 
              Otherwise you can also look into selling books on online marketplaces such as eBay, Amazon.com or Shopify.com.
            </p>
           </dd>
           <dt id="2">I have a problem buying from the bookseller mentioned. What can I do?</dt>
           <dd>
            <p>
              If you tried to buy the book from a book listings service, then you should contact the service for help. 
              If you bought the book directly from a bookseller, contact their customer service support. 
              If the bookseller is a member of an organization with a stated code of ethics like the <a href="http://www.ilab-lila.com/">International League of Antiquarian Booksellers</a> (ILAB), then you can contact the organization with any issues you have. 
              Otherwise you may need to contact a third party like the <a href="http://www.bbb.org/">Better Business Bureau</a>.
            </p>
           </dd>
           <dt id="3">I couldn't find the book I needed. What do I do now?</dt>
           <dd>
            <p>
              You may want to consider doing the following solutions:
              <ul>
                <li>
                  Contact the original publisher.
                </li>
              </ul>
              <ul>
                <li>
                  Double-check your data.
                </li>
              </ul>
              <ul>
                <li>
                  Contact the book author.
                </li>
              </ul>
              <ul>
                <li>
                  Work with a professional book service (ask the local booksellers for a referral).
                </li>
              </ul>
              <ul>
                <li>
                  Try using a search engline such as Google, Yahoo, Bing.
                </li>
              </ul>
            </p>
           </dd>
           <dt id="4">Can you tell me more about a particular book?</dt>
           <dd>
            <p>
              No. Everything listed on the BookedSearch website is what we know from the booksellers. 
              If you want to know more about the book please contact the booksellers.
            </p>
           </dd>
           <dt id="5">Does BookedSearch include orders outside of the United States?</dt>
           <dd>
            <p>
              The only distributors for bookbuyers are within the United States of America. 
            </p>
           </dd>
    </div>
  );
}

export default FAQ;