import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { editing } from '../../../state/index.js';
import { Edit } from '../../../components/index.js';

export function NewsItem({ title, descr }) {

    const [edited, setEdited] = useRecoilState(editing);

    const [edit, setEdit] = useState(false); 

    return (
        <div className='news-item'>
            <div className='news-item__header'>
                <span>{ title }</span>
            </div>
            <div className='news-item__body'>
                { descr }
            </div>
            { edited && <button onClick={() => setEdit(old => !old)}>Edit</button>}
            { edit &&
            <Edit
                url={'test.php'}
                data={
                    [
                        { name: 'title' },
                        { name: 'descr' },
                    ]
                }
            />}
        </div>
    )
}