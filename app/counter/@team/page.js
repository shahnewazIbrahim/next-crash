import Image from 'next/image';

const teamMembers = [
    { name: 'Alice Johnson', role: 'CEO', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Bob Smith', role: 'CTO', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Charlie Brown', role: 'Lead Developer', imageUrl: 'https://via.placeholder.com/150' },
];

const TeamMember = ({ name, role, imageUrl }) => (
    <div className='text-center space-y-1'>
        <Image src={imageUrl} alt={`${name}'s picture`} width={150} height={150} />
        <h2>{name}</h2>
        <p>{role}</p>
    </div>
);

const TeamPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className="text-2xl">Our Team</h1>
            <p className='mb-2'>Meet the amazing team behind our success.</p>
            <div className='flex justify-center items-center gap-10'>
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        role={member.role}
                        imageUrl={member.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamPage;