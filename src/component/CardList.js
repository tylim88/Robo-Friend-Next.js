import Card from './Card';

const CardList = ({ robots }) => {
  const cardArrayComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });

  return <div>{cardArrayComponent}</div>;
};

export default CardList;
