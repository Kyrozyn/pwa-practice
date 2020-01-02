import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";

class Test extends Component {
    render() {
        return (
            <div>
                <h2>Test</h2>
                <Typography variant="body2" color="textPrimary" align="left">
                    Hai, sekarang tahun {new Date().getFullYear()}
                </Typography>
            </div>
        )
    }
}

export default Test;