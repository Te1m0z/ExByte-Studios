import './edit.sass';

export function EditForm({ url, data }) {

    const send = async e => {
        e.preventDefault();
        let req = await fetch(`http://te1m0z.site/${url}`);
        let res = await req.json();
        console.log(res);
    }

    return (
        <form onSubmit={send} id='form-edit'>
            {data.map((item, idx) => (
                <input
                    key={idx}
                    type='text'
                    name={item.name}
                    placeholder={item.name}
                    required
                />
            ))}
            <button type='submit'>Done</button>
        </form>
    )
}