import { StatWrapper, StatList, StatItem} from "./Statistics.syled";

const StatElem = ({label,percentage}) => {
    return (
        <StatItem>
            <span>{label}</span>
            <span>{percentage}</span>
        </StatItem>

    );
}



export const Statistics = ({ title=null, stats })=>{
    return (
        <StatWrapper>
            {title && <h2 className="titleStat">{title}</h2>}
            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <StatElem key ={id} label ={label} percentage ={percentage} />
                 
                ))}
                
            </StatList>
            
        </StatWrapper>
    )
};

