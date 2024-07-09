/*
 * Copyright (C) 2016  Daniel Hsing
 *               2016  Ben Ockmore
 *               2016  Sean Burke
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import * as bootstrap from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';
import './Footer.css'; // Importing custom CSS for styling

const {Col, Container, Row} = bootstrap;

function Footer(props) {
    const {repositoryUrl, siteRevision} = props;

    return (
        <footer className="footer py-4">
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} className="text-md-left mb-2 mb-md-0">
                        <small>{'Tested with '}
                            <a
                                href="https://www.browserstack.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="footer-link"
                            >
                                <img
                                    alt="BrowserStack Logo"
                                    height="25"
                                    src="/images/BrowserStack.png"
                                    className="footer-logo"
                                />
                            </a>
                        </small>
                    </Col>
                    <Col xs={12} md={6} className="text-md-right mb-2 mb-md-0">
                        <small>Cover image by{' '}
                            <a href="https://commons.wikimedia.org/wiki/File:Bookshelf.jpg" className="footer-link">
                                Stewart Butterfield
                            </a> (
                            <a href="https://creativecommons.org/licenses/by/2.0/deed.en" className="footer-link">
                                CC-BY-2.0
                            </a>)
                        </small>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className="text-md-left mb-2 mb-md-0">
                        <div className="small">
                            <a href="/admin-logs" className="footer-link">
                                Admin Logs
                            </a>
                        </div>
                        <div className="small">
                            <a href="/privacy" className="footer-link">
                                Privacy & Terms
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-md-right">
                        <small>
                            Alpha Software —{' '}
                            <a href={`${repositoryUrl}tree/${siteRevision || 'master'}`} className="footer-link">
                                {siteRevision || 'unknown revision'}
                            </a> —&nbsp;
                            <a href="https://tickets.metabrainz.org/projects/BB/issues/" className="footer-link">
                                Report a Bug
                            </a>
                        </small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

Footer.displayName = 'Footer';
Footer.propTypes = {
    repositoryUrl: PropTypes.string.isRequired,
    siteRevision: PropTypes.string.isRequired
};

export default Footer;
