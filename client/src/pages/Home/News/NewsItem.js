import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authorized } from '../../../state/index.js';
import { EditForm } from '../../../components/index.js';

export function NewsItem({ title, descr }) {

    const { status, role } = useRecoilValue(authorized);
    
    const [edit, setEdit] = useState(false);

    return (
        <div className='news-item'>
            <div className='news-item__header'>
                <span>{title}</span>
            </div>
            <div className='news-item__body'>
                {descr}
            </div>

            {
                status && role &&
                <button onClick={() => setEdit(old => !old)}>Edit</button>
            }

            {
                edit &&
                <EditForm
                    url={'test.php'}
                    data={
                        [
                            { name: 'title' },
                            { name: 'descr' },
                        ]
                    }
                />
            }

        </div>
    )
}