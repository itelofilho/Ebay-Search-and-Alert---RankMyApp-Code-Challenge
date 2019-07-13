import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Grid, Divider, Tooltip } from "@material-ui/core";

// Icons
import RefreshIcon from "@material-ui/icons/RefreshOutlined";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import BoardItem from "../BoardItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "calc((1280px) / 3)"
    },
    iconClose: {
      fontSize: theme.typography.body2.fontSize
    },
    header: {
      padding: theme.spacing(1, 1)
    },
    itemsContainer: {
      padding: theme.spacing(0, 1)
    },
    itemContainer: {
      padding: theme.spacing(1, 0)
    },

    image: {
      width: 96,
      height: 96,
      objectFit: "cover",
      borderRadius: 4,
      margin: theme.spacing(0, 1, 0, 0)
    }
  })
);

type BoardProps = {
  email: string;
  sp: string;
  time: string;
  onRequestRefresh?(): void;
  onRequestClose?(): void;
  onClickBoardItem?: (_id: string) => () => void;
  data: {
    _id: string;
    imageURL?: string;
    title: string;
    price: string;
  }[];
};

const Board: React.FC<BoardProps> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <div className={classes.header}>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography variant="caption" component="h3">
                {props.email}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <CloseIcon
                  className={classes.iconClose}
                  onClick={props.onRequestClose}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Tooltip title={`Search Phrase: ${props.sp}`} placement="top">
                <Typography variant="body2" component="p">
                  SP: {props.sp}
                </Typography>
              </Tooltip>
            </Grid>
            <Grid item>
              <Grid container direction="row" alignItems="center">
                <Typography variant="body2" component="p">
                  {props.time}
                </Typography>
                <RefreshIcon onClick={props.onRequestRefresh} />
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className={classes.itemsContainer}>
          {props.data.map((item, index) => (
            <React.Fragment key={item._id}>
              <div className={classes.itemContainer}>
                <BoardItem
                  onClick={() => {
                    if (props.onClickBoardItem) {
                      props.onClickBoardItem(item._id);
                    }
                  }}
                  imageURL={item.imageURL}
                  title={item.title}
                  price={item.price}
                />
              </div>
              {props.data.length !== index + 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Board;
