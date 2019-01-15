import React from "react"

const NewThingForm = () => (
  <form action="/api/things" method="POST" className='inv-form'>
    <input id='' type="hidden" name="_method" value="PUT"/>
    <h2 className='inv-form__title'>New Thing</h2>
    <div className="inv-form__item codefont">
      <input id="thing-name" type="text" name="thing_name"/>
      <label htmlFor="thing-name">Name</label>
    </div>
    <div className="inv-form__item codefont">
      <input id="thing-label" type="text" name="thing_label"/>
      <label htmlFor="thing-label">UNIQ</label>
    </div>
    <div className="inv-form__item codefont">
      <input id="bin-label" type="text" name="bin_label"/>
      <label htmlFor="bin-label">BIN</label>
    </div>
    <input className='inv-form__submit' type="submit" value="Submit"/>
  </form>
)

export default NewThingForm
