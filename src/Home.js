import React, {Component} from "react";
import {Button, Container, Table, TableBody, TableHead, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import {Alert} from '@material-ui/lab';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {},
            page: 1
        }
    }

    halamanSelanjutnya() {
        var a = this.state.page + 1;
        this.setState({page: a});
        this.panggilApi(a);
    }

    halamanSebelumnya() {
        var a = this.state.page - 1;
        if (a >= 1) {
            this.setState({page: a});
            this.panggilApi(a);
        }
    }

    panggilApi(halaman) {
        fetch("http://localhost:8001/records/users?order=id&page=" + halaman)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.records
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            );
    }

    componentDidMount() {
        this.panggilApi(1)
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <Alert severity={"error"}>Data gagal diambil!</Alert>
        } else if (!isLoaded) {
            return <Alert severity={"info"}>Loading.....</Alert>
        } else {
            return (
                <Container>
                    <div>
                        <Table>
                            <TableHead>
                                <TableCell>ID</TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>Password</TableCell>
                            </TableHead>
                            <TableBody>
                                {items.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell component={"th"} scope={"item"}>{item.id}</TableCell>
                                        <TableCell>{item.username}</TableCell>
                                        <TableCell>{item.password}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <br/>
                        <Button onClick={() => {
                            this.halamanSebelumnya()
                        }}>Halaman Sebelumnya</Button>
                        <Button onClick={() => {
                            this.halamanSelanjutnya()
                        }}>Halaman Selanjutnya</Button>
                    </div>
                </Container>
            );
        }
    }
}

export default Home;