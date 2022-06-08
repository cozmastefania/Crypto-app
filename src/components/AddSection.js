import React from 'react';
import AddButton from './AddButton';
import AddStructure from './AddStructure';
import '../Style.css';

const AddSection = () => {
    <section>
          <div className="flex">
            <AddStructure />
          </div>
         <AddButton/>
        </section>
}

export default AddSection;