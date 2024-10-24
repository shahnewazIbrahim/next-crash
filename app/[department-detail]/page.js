export const metadata = {
    title: "Dynamic Route App",
    description: "Vablei ki na vablei ki",
};

export default function DynamicPage({params}) {
    return (
        <div>
            {params['department-detail'].split('-').join(' ')}
        </div>
    )
}